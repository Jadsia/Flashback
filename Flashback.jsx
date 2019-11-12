<html>
  <head>
    <title>Flashback</title>
    <script src="https://unpkg.com/@babel/standalone@7.2.5/babel.min.jss"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.development.js"></script>
    <link rel="stylesheet" type="text/css" href="index.css"></link>
  </head>

  <body>
  <div id="app"></div>

    <script type='text/babel'>
          var App = function() {
          return (
            <div className='App'>
              <h1 className='title'>
                 Flashback
              </h1>
                <p className='sub-title'>
                   An interactive flashcard app.
                </p>
                  <div className="card-list">
                    {Card()}
                  </div>
            </div>
          );
        };

        var Card = function() {
              <div className='Card -front'>
                  <div className="front">
                    <h3 className='question'>
                    You may know that React was created at _________.
                    </h3>
                      <p className='hint'>
                      <span>Hint:</span> This company's site is known for being written in PHP.
                      </p>
                  </div>
              </div>
        };
        ReactDOM.render(App(), document.getElementById('app'));
    </script>
  </body>
</html>
