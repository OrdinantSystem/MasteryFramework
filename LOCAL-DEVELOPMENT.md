# Running myNotes locally

The current website is in `myNotes/my_notes_web/`. Use Node.js 24 and npm.
Run the following commands in Terminal.

## First-time setup

```sh
cd /Users/jean/Documents/OrdinantSystems/MasteryFramework/myNotes/my_notes_web
nvm install
nvm use
node --version
npm ci
```

The Node version should start with `v24`. Run `npm ci` again after the
dependency lockfile changes; it is not needed every time you start the site.
The root `.nvmrc` selects Node 24.22.1. Run `nvm use` in each new terminal
before using the project commands. nvm also finds this file from the application
subfolder. If `nvm` is unavailable in your terminal, load it first with
`source "$HOME/.nvm/nvm.sh"`.

## View the complete website, including search

```sh
cd /Users/jean/Documents/OrdinantSystems/MasteryFramework/myNotes/my_notes_web
nvm use
npm run build && npm run preview
```

Open **http://127.0.0.1:4321/** in your browser.

The build generates the static pages and search index and runs the project’s
checks. Preview serves that build. After changing content or code, stop the
preview, build again, and start the preview again to see the updated version.

## Edit with automatic browser updates

```sh
cd /Users/jean/Documents/OrdinantSystems/MasteryFramework/myNotes/my_notes_web
nvm use
npm run dev
```

Open **http://127.0.0.1:4321/**. Saved edits update the development site
automatically. Use the build-and-preview commands above to test search and the
complete static output.

## Stop the server

For a server running in your Terminal, press **Ctrl+C**.

If the server started in the background, or the Terminal has already returned
to its prompt, run the command matching the server you started:

```sh
cd /Users/jean/Documents/OrdinantSystems/MasteryFramework/myNotes/my_notes_web
nvm use
npm exec -- astro preview stop
```

For the development server:

```sh
cd /Users/jean/Documents/OrdinantSystems/MasteryFramework/myNotes/my_notes_web
nvm use
npm exec -- astro dev stop
```

## Check server status

From `myNotes/my_notes_web/`:

```sh
npm exec -- astro preview status
npm exec -- astro dev status
```

Use one server at a time: both commands are configured for port **4321**.
If that port is occupied, stop the previous server before starting another.
The terminal prints the actual address if a different port is selected.

These commands run the website locally. They do not commit, push, or deploy it.
