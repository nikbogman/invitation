# Invitation
A remake of a project i made witha fellow classmate in my last year of high school. We had prom, and collecting answers from every teacher, tus not as hard, could be simplified. This is the target of this app, a small to medium range events, without entry fees, that need to know who of the invited guests is attending.

## Tech
The tech used in this project is deno. The deno runtime is something I wanted to try for a while, and since it's team even offers a deploy option via Deno Deploy, it was a perfect match. The used framework is Oak with EJS templating. The database is just plain json, since every other option cannot be hosted on deno deploy and will be overkill.

## Endpoints
+ `/admin` - admin pannel with all the guest listed with their answer
+ `/guest/:id` - a page for the specific guest to answer to the invitation
+ `/thank-you` - you guessed right, a thank you page.
+ `/sorry` - a sorry page, what did you think hahhaha
