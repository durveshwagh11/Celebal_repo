import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';  

const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="container mt-5">
      <div className="form-header">
        <h1>Form Submitted Successfully!</h1>
      </div>
      <ul className="list-group">
        <li className="list-group-item">First Name: {formData.firstName}</li>
        <li className="list-group-item">Last Name: {formData.lastName}</li>
        <li className="list-group-item">Username: {formData.username}</li>
        <li className="list-group-item">Email: {formData.email}</li>
        <li className="list-group-item">Phone Number: {formData.phoneNo}</li>
        <li className="list-group-item">Country: {formData.country}</li>
        <li className="list-group-item">City: {formData.city}</li>
        <li className="list-group-item">PAN Number: {formData.panNo}</li>
        <li className="list-group-item">Aadhar Number: {formData.aadharNo}</li>
      </ul>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Go back to the form</Link>
      </div>
    </div>
  );
};

export default Success;
