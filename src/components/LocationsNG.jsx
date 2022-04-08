import React from "react";
import {Table} from 'react-bootstrap'

function LocationsNG(){
    return(
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>State</th>
      <th>Area</th>
      <th>Property Manager</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Lagos</td>
      <td>Lekki Peninsula Phase 1</td>
      <td>Jagaban of Lagos</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Akwa Ibom</td>
      <td>Shelter Afrique</td>
      <td>Tom Boniface</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Enugu</td>
      <td colSpan={2}>Enugu, GRA. For long term renting</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Delta</td>
      <td>Along Asaba Expressway, 20m from Asaba international market</td>
      <td>Emeka Odili</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>6</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>9</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
{/* <Link to="/" component={FancyLink} /> */}
        </div>
    )
}
export default LocationsNG