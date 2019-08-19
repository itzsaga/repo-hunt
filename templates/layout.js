const layout = body => `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Repo Hunt</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
  </head>
  <body>
    <div class="container">
      <div class="navbar">
        <div class="navbar-brand">
          Repo Hunt
          Find cool open-source projects daily
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              Post a repository
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        ${body}
      </div>
    </div>
  </body>
</html>
`
module.exports = layout
