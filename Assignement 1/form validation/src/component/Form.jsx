import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';  

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'PAN Number is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      navigate('/success', { state: { formData } });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mt-5">
      <div className="form-header">
        <h1>Form Validation</h1>
        <p>All fields required</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>Username</label>
            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <div className="text-danger">{errors.username}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>Password</label>
            <div className="input-group">
              <input type={showPassword ? "text" : "password"} className="form-control" name="password" value={formData.password} onChange={handleChange} />
              <div className="input-group-append">
                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>Phone Number</label>
            <input type="text" className="form-control" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
            {errors.phoneNo && <div className="text-danger">{errors.phoneNo}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>Country</label>
            <select className="form-control" name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              {/* Add more countries as needed */}
            </select>
            {errors.country && <div className="text-danger">{errors.country}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>City</label>
            <select className="form-control" name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              {/* Add more cities as needed */}
            </select>
            {errors.city && <div className="text-danger">{errors.city}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>PAN Number</label>
            <input type="text" className="form-control" name="panNo" value={formData.panNo} onChange={handleChange} />
            {errors.panNo && <div className="text-danger">{errors.panNo}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label>Aadhar Number</label>
            <input type="text" className="form-control" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
            {errors.aadharNo && <div className="text-danger">{errors.aadharNo}</div>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4" disabled={Object.keys(validate()).length > 0}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
