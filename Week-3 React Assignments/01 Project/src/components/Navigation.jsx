import Nav from 'react-bootstrap/Nav';
import '../App.css'

function Navigation() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      style={{display:"flex", justifyContent:"space-between", padding:"10px"}}
    >
    <div className="logo">
        <h1>PHLOX</h1>
    </div>
      <div className="wrapper">
      <Nav.Item>
        <Nav.Link href="/home" className='text-dark'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-dark'>Shop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-dark'>About us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-dark'>Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className='text-dark'>Contact us</Nav.Link>
      </Nav.Item>
      </div>
      <div className="additional">
         <div className="login">Login</div>
         <div className="searchIcon"><i className="ri-search-line"></i></div>
         <div className="shopingBagIcon"><i className="ri-shopping-bag-line"></i></div>
      </div>
    </Nav>
  );
}

export default Navigation;