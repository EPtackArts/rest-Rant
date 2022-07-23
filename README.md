# Project REST-rant

REST-rant is an app where users can review restaurants.

## Tech Usage

CSS Framework: Bootstrap
Stack: Express, NodeJS
Server-Side Rendering: JSX
Node Modules: dotenv, express-react-views

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | Home page |
| GET | `/places` | Places index page |
| POST | `/places` | Create a new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places/:id` | Details about a particular place |
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Form page for editing an exisiting place |
| DELETE | `/places/:id` | Delete a particular place |
| POST | `/places/:id/rant` | Creat a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:id` | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above)

## Database

### Places
| Field | Type |
| ----- | ---- |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

### Rants
| Field | Type |
| ----- | ---- |
| _id	| Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment	| String |
| reviewer | String |

## User Stories
TBD

## Wireframes
TBD

## Color Scheme
TBD
