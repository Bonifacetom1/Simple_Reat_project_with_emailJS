import { ListGroup, Image } from "react-bootstrap";

function Group1() {
    return(
    <div className="group-1 row">
        <div className="row">
        <h2>Header</h2>
            <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="textStyle">
                <p>
                    Hi i'm Tom, I develop web apps with Node.js, Ejs, react.js, HTML, CSS and javascript.
                I love writing backend codes and I love handling the basic functionalities of a site when working with a team.
                I am easy going and transparent in my work. I put the happiness of my clients first in making sure I deliver my job on time.
                Hi i'm Tom, I develop web apps with Node.js, Ejs, react.js, HTML, CSS and javascript.
                I love writing backend codes and I love handling the basic functionalities of a site when working with a team.
                I am easy going and transparent in my work. I put the happiness of my clients first in making sure I deliver my job on time.
                Hi i'm Tom, I develop web apps with Node.js, Ejs, react.js, HTML, CSS and javascript.
                I love writing backend codes and I love handling the basic functionalities of a site when working with a team.
                I am easy going and transparent in my work. I put the happiness of my clients first in making sure I deliver my job on time.
                
                </p>
                
                </div>
            </div>
            <div className="col col-md-12 col-lg-6 image">
                <img 
                src="https://media.istockphoto.com/photos/green-striped-lawn-in-the-park-picture-id467561374?b=1&k=20&m=467561374&s=170667a&w=0&h=p7g1xv7oago4X93LLzPXHWYdvphC7ycW_d6C9MXHeOo="
                    alt="Green"
                />
            </div>
            {/* <ListGroup.Item>renders</ListGroup.Item>
            <ListGroup.Item>horizontally!</ListGroup.Item> */}
        </div>
    </div>
    )
}
export default Group1