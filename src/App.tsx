import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '1px solid #ccc',
};

const logoStyle: React.CSSProperties = {
  flex: 1,
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle: React.CSSProperties = {
  marginLeft: '10px',
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  padding: '20px',
};

const footerStyle: React.CSSProperties = {
  padding: '10px',
  borderTop: '1px solid #ccc',
  textAlign: 'center',
};

function LandingPage() {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <h1>Logo</h1>
        </div>
        <div style={buttonContainerStyle}>
          <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <div style={contentStyle}>
        <h2>Welcome to Our Website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius nunc.</p>
        {/* Daha fazla içerik eklenebilir */}
      </div>
      <footer style={footerStyle}>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default LandingPage;
