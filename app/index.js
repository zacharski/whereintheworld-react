var React = require('react');
var ReactDOM = require('react-dom');
require('./style.css');

class App extends React.Component {
    render() {
        return (
        	<div>
        	<section>
				<header className="major">
					<h2>Search for cities and countries<br />
						by name, code, or continent</h2>
				</header>
                <div className="row">
                  
                </div>
				<form method="post" action="#">
					
					    <div className="12u$">
					        <input type = "text"  name="worldSearch" id="message" placeholder="Search the World" />
					    </div>
					
						
									<p className="large"><input type="submit" value="Find" /></p>
								
					
					&nbsp;<br />
				

					
				</form>

	
 
            </section>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
