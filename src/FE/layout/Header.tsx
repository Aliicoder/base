const styles = require('../../scss/layout/_Header.module.scss')
const Header = () => {
  return ( 
    <header >
      <div className={`${styles.hello}`}>hello world</div>
    </header>
   );
}

export default Header;