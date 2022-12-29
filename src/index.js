import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 40, left: 40, width: 40, fontSize: '20px' }}>
        <a aria-label="Credits" href="https://twitter.com/yellowDstudio" target="_blank" rel="noopener">
          <div>
            <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFF33" d="M0 0h15v15H0z"></path>
            </svg>
          </div>
        </a>
      </div>
      <p style={{ position: 'absolute', bottom: 30, left: 90, fontSize: '12px' }}>
        WEB3 CREATIVE STUDIO STARTUP
        <br />@ C Y B E R V E R S E
      </p>
      {/* <a href="https://twitter.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px'}}>
        Yellow.        <br />
        Studios
  </a> */}

      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '18px' }}>
        Y E L L O W . <br />S T U D I O S
      </div>

      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '12px', textAlign: 'right' }}>
        <a href="https://twitter.com/warrior3101" target="_blank">
          / WARRIOR3101 <br />
        </a>
        <a href="http://exptultra.com/" target="_blank">
          / EXPTULTRA
        </a>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)

{
  /* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
<div style={{ position: 'absolute', bottom: 40, left: 40, width: 40, fontSize: '20px'}} >Y.S</div>
<a href="https://twitter.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
  yellow.        <br />
  studios
</a>
<div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>ok —</div>
<div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>16/12/2022</div>
</div> */
}
