select "g"."name",
       count("f".*)
  from "genres" as "g"
  join "filmGenre" as "fg" using ("genreId")
  join "films" as "f" using ("filmId")
  join "castMembers" as "c" using ("filmId")
  join "actors" as "a" using ("actorId")
 where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
 group by "g"."genreId";
