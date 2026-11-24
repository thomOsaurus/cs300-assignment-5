# Assignment 5: Provided Routed-Data Scenarios

Pick one scenario and copy its goal into the Plan Before Building section of your submission template.

All four are fictional practice situations, not real clients, so there is nothing to research and no one to interview. Every scenario uses the same requirements and rubric. You may change names, wording, and colors, but keep every required item from the assignment. Optional extra features do not replace required work.

**Your data source.**

These JSON files are the data source for every scenario. They are already in `public/data/` in the starter, so the development server and your live site both serve them. Load yours with `fetch`; importing the array directly does not demonstrate asynchronous loading. Fetch with the base path, such as `${import.meta.env.BASE_URL}data/books.json`, so the same code works on your live site.

- Every record has an `id`, `title`, `creator`, `category`, `minutes`, and `description`; use `id` in detail URLs.
- Use [empty](public/data/empty.json) and [incomplete](public/data/incomplete.json) for controlled checks of the empty state and missing fields.
- To see a request failure, turn on Offline in the DevTools Network tab, or fetch a path that does not exist during a local test, then restore the working version.
- To check stale responses, turn on Slow 4G and switch quickly between two valid detail IDs. The newest route must decide the displayed data even if an earlier response finishes later.

**Begin and check.**

1. Choose your scenario and copy its goal into your plan.
2. Copy its suggested routes into your route map, or write equivalent meaningful routes.
3. Test a direct visit to every route before connecting data.
4. Fetch your JSON and build the loading, success, empty, error, and recovery states.
5. Compare an ID from the file with an ID that does not exist and record both results.
6. Test Back and Forward, refresh on the live site, keyboard and focus behavior, and rapid route changes.
7. Write at least three routing or asynchronous tests and record what you actually saw.

Saved lists, logins, a backend, and a complex form are not Assignment 5 requirements.

## Book Catalog (Recommended)

- Who uses it: Alex, a reader who wants to share a particular fictional book view.
- Goal: Browse the collection, search by text, and open a bookmarkable detail page.
- Data: [Fictional books](public/data/books.json), in `public/data/books.json`.
- Suggested routes: /books for browse; /search?q=robot for search; /books/:id for detail; a separate not-found page.

## Activity Directory

- Who uses it: Casey, a volunteer finding a fictional club activity.
- Goal: Browse activities, search titles and creators, and share an activity's detail URL.
- Data: [Fictional activities](public/data/events.json), in `public/data/events.json`.
- Suggested routes: /activities; /search?q=study; /activities/:id; not-found.

## Hobby-Resource Directory

- Who uses it: Ren, a club member finding a useful practice resource.
- Goal: Browse resources, filter or search through a URL value, and share one resource's details.
- Data: [Fictional resources](public/data/resources.json), in `public/data/resources.json`.
- Suggested routes: /resources; /search?q=web; /resources/:id; not-found.

## Game Directory

- Who uses it: Taylor, a fictional club member comparing practice games.
- Goal: Browse games, search titles and creators, and share a bookmarkable game detail page.
- Data: [Fictional games](public/data/games.json), in `public/data/games.json`.
- Suggested routes: /games for browse; /search?q=puzzle for search; /games/:id for detail; not-found.
