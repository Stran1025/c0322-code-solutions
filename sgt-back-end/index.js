const pg = require('pg');
const express = require('express');
const app = express();
const unexpectedError = { error: 'An unexpected error occurred' };

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
        select *
          from "grades"`;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      res.send(500).json(unexpectedError);
      process.stderr.write(err);
      process.exit(1);
    });
});

app.delete('/api/grades/:id', (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    const error = { error: 'The id need to be a number' };
    res.status(400).json(error);
    return;
  }
  const sql = `
          delete from "grades"
           where "gradeId" = $1
          returning *`;
  db.query(sql, [req.params.id])
    .then(result => {
      if (!result.rows[0]) {
        const error = { error: 'Cannot find grades with input Id' };
        res.status(404).json(error);
        return;
      }
      res.status(204).send();
    })
    .catch(err => {
      res.status(500).json(unexpectedError);
      process.stderr.write(err);
      process.exit(1);
    });
});

app.use(express.json());

app.put('/api/grades/:id', (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    const error = { error: 'The id need to be a number' };
    res.status(400).json(error);
    return;
  }
  if (!req.body.name || !req.body.score || !req.body.course) {
    const error = { error: 'Input object invalids' };
    res.status(400).json(error);
    return;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    const error = { error: 'Score must be a number between 0 and 100' };
    res.status(400).json(error);
    return;
  }
  const sql = `
        update "grades"
           set "course" = $2,
               "score" = $3,
               "name" = $4
         where "gradeId" = $1
         returning *`;
  const { score, name, course } = req.body;
  db.query(sql, [req.params.id, course, score, name])
    .then(result => {
      if (!result.rows[0]) {
        const error = { error: 'Cannot find grades with input Id' };
        res.status(404).json(error);
        return;
      }
      const { score, name, course } = result.rows[0];
      res.status(200).json({ score, name, course });
    })
    .catch(err => {
      res.status(500).json(unexpectedError);
      process.stderr.write(err);
      process.exit(1);
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.score || !req.body.course) {
    const error = { error: 'Input object invalids' };
    res.status(400).json(error);
    return;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    const error = { error: 'Score input must be between 0 and 100' };
    res.status(400).json(error);
    return;
  }
  const sql = `
        insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *`;
  const { name, course, score } = req.body;
  db.query(sql, [name, course, score])
    .then(result => {
      const grade = result.rows[0];
      res.status(200).json(grade);
    })
    .catch(err => {
      res.status(500).json(unexpectedError);
      process.stderr.write(err);
      process.exit(1);
    });
});

app.listen(3000, () => {
  process.stdout.write('server is listening on port 3000! \n');
});
