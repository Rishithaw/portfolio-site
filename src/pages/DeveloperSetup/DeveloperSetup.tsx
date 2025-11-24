import React, { useState } from 'react';
import { Card } from '../../Components/Card';
import { Label } from '../../Components/Label';
import { Text } from '../../Components/Text';
import tools from '../../data/toolData';
import { ToolCard } from '../../Components/ToolCard/ToolCard';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from '../../Components/Table';

export const DeveloperSetup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    comments: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      country: '',
      comments: '',
    });
  };

  return (
    <div>
      {/* 🔵 Tools I Use Section */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2
          style={{ color: '#00aaff', fontSize: '32px', marginBottom: '20px' }}
        >
          Tools I Use
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '35px',
            flexWrap: 'wrap',
            padding: '10px',
          }}
        >
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              image={tool.image}
              link={tool.link}
            />
          ))}
        </div>
      </div>

      {/* 🔵 Developer Setup Card */}
      <div style={{ margin: '40px' }}>
        <Card backgroundColor="#ffffff" disabled={false}>
          <>
            <Label text="Developer Setup" color="#007bff" />
            <Text
              content="Here is the setup I use for development, including editor preferences, terminal configuration, fonts, and tools."
              size="16px"
              color="#333"
            />
          </>
        </Card>

        {/* 🔵 Table Section */}
        <div style={{ marginTop: '30px' }}>
          <Card backgroundColor="#ffffff" disabled={false}>
            <>
              <Label text="Environment Details" color="#007bff" />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>
                      <strong>Category</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Details</strong>
                    </TableCell>
                  </TableRow>
                </TableHeader>

                <tbody>
                  <TableRow>
                    <TableCell>VS Code Setup</TableCell>
                    <TableCell>
                      Extensions: Prettier, ESLint, GitLens, Material Icon Theme
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Terminal Setup</TableCell>
                    <TableCell>Windows Terminal + PowerShell Core</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Preferred Editor Font</TableCell>
                    <TableCell>Consolas, JetBrains Mono</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Browsers</TableCell>
                    <TableCell>Chrome, Firefox</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Package Managers</TableCell>
                    <TableCell>npm, npx</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Version Control</TableCell>
                    <TableCell>Git, GitHub Desktop, GitHub Actions</TableCell>
                  </TableRow>
                </tbody>

                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>
                      Last Updated: 2025 • Optimized for React + TypeScript
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </>
          </Card>
        </div>

        {/* 🔵 Contact Form Section */}
        <div style={{ marginTop: '30px' }}>
          <Card backgroundColor="#ffffff" disabled={false}>
            <div style={{ padding: '20px' }}>
              <h2
                style={{
                  textAlign: 'center',
                  color: '#1a1a1a',
                  fontSize: '28px',
                  marginBottom: '30px',
                }}
              >
                Your Contact Information
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#333',
                    }}
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Phone Number Field */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#333',
                    }}
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(XXX)-XXX-XXX"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#333',
                    }}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sample@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Country Dropdown */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#333',
                    }}
                  >
                    Country:
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                      backgroundColor: '#fff',
                    }}
                  >
                    <option value="">Select your country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Comments Field */}
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#333',
                    }}
                  >
                    Comments:
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '12px 30px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#fff',
                      backgroundColor: '#b8860b',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    style={{
                      padding: '12px 30px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#fff',
                      backgroundColor: '#a0826d',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    }}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSetup;
