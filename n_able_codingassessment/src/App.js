import React, { Fragment, useState } from 'react';

import Table from './components/Table';

import './App.css';

function App() {

  const [toggleState, setToggleState] = useState(3);
  const [togglePage, setTogglePage] = useState(1);

  const togglePages = (index) => {
    setTogglePage(index)
  }

  const toggleTab = (index) => {
      setToggleState(index);
  }

const inputContent1 = () => {
  return ( 
    <Fragment>
    <div className="grid-content">
      <div className="left">
          <ul className="left_list">
              <li className={toggleState === 1 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(1)} className="tab_title">
                      <h3>Monitor</h3>
                  </div>
              </li>
              <li className={toggleState === 2 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(2)}>
                      <h3>Manage everything</h3>
                  </div>
              </li>
              <li className={toggleState === 3 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(3)}>
                      <h3>Patch excellence</h3>
                  </div>
              </li>
              <li className={toggleState === 4 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(4)}>
                      <h3>Secure:best in class</h3>
                  </div>
              </li>
              <li className={toggleState === 5 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(5)}>
                      <h3>Flexible automation</h3>
                  </div>
              </li>
          </ul>
      </div>
      <div className="right">
          <div className={toggleState === 1 ? "content active-content" : "content"}>
              Test 1
          </div>
          <div className={toggleState === 2 ? "content active-content" : "content"}>
              Test 2
          </div>
          <div className={toggleState === 3 ? "content active-content" : "content"}>
              <ul>
                  <li>
                      <p>Manage servers, workstations, network, mobile, Windows, Mac, and Linux</p>
                  </li>
                  <li>
                      <p>Integrations with Meraki and Intune</p>
                  </li>
                  <li>
                      <p>Fast, responsive front and back end remote access</p>
                  </li>
                  <li>
                      <p>Automatic network discovery</p>
                  </li>
                  <li>
                      <p>Network topology mapping</p>
                  </li>
              </ul>
          </div>
          <div className={toggleState === 4 ? "content active-content" : "content"}>
              Test 4
          </div>
          <div className={toggleState === 5 ? "content active-content" : "content"}>
              Test 5
          </div>
      </div>
  </div>
  </Fragment>
  );
}

const inputContent2 = () => {
  return ( 
    <Fragment>
    <div className="grid-content">
      <div className="left">
          <ul className="left_list">
              <li className={toggleState === 1 ? "tabt active-tab" : "tabt"}>
                  <div onClick={() => toggleTab(1)} className="tab_title">
                      <h3>Downtime</h3>
                  </div>
              </li>
              <li className={toggleState === 2 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(2)}>
                      <h3>Missed opportunities</h3>
                  </div>
              </li>
              <li className={toggleState === 3 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(3)}>
                      <h3>Inadequate support</h3>
                  </div>
              </li>
              <li className={toggleState === 4 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(4)}>
                      <h3>Labor shortages</h3>
                  </div>
              </li>
              <li className={toggleState === 5 ? "tab active-tab" : "tab"}>
                  <div onClick={() => toggleTab(5)}>
                      <h3>Focus</h3>
                  </div>
              </li>
          </ul>
      </div>
      <div className="right">
          <div className={toggleState === 1 ? "content active-content" : "content"}>
              Test 1
          </div>
          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <div className="content_container">
                <div className="image-standIn"></div>
                <p>Limited RMM technology limits growth opportunities, N-able N-central lets you take advantage of every opportunity available to grow your MSP.</p>
                <button className="content_button">Button Text</button>
            </div>
          </div>
          <div className={toggleState === 3 ? "content active-content" : "content"}>
              <ul>
                  <li>
                      <p>Manage servers, workstations, network, mobile, Windows, Mac, and Linux</p>
                  </li>
                  <li>
                      <p>Integrations with Meraki and Intune</p>
                  </li>
                  <li>
                      <p>Fast, responsive front and back end remote access</p>
                  </li>
                  <li>
                      <p>Automatic network discovery</p>
                  </li>
                  <li>
                      <p>Network topology mapping</p>
                  </li>
              </ul>
          </div>
          <div className={toggleState === 4 ? "content active-content" : "content"}>
              Test 4
          </div>
          <div className={toggleState === 5 ? "content active-content" : "content"}>
              Test 5
          </div>
      </div>
  </div>
  </Fragment>
  );
}


  return (
    <div className="App">
      <div className="main">
        {
        togglePage ===1 ? (
          <div className="page_buttons">
            <button className="page_button" onClick={() => togglePages(2)}>
              Page 1
            </button>
            <button className="page_button" onClick={() => togglePages(3)}>
              Page 2
            </button>
          </div>
        ) : togglePage === 2  ? (
          <Fragment>
            <button className="back" onClick={() => togglePages(1)}>Back</button>
            <Table title="Orchestrate at Scale" content={inputContent1()}/>
          </Fragment>
        ) : togglePage === 3 ? (
          <Fragment>
            <button className="back" onClick={() => togglePages(1)}>Back</button>
            <Table title="Avoid the pitfalls of inadequite RMM" content={inputContent2()}/>
          </Fragment>
        ) :
        <Fragment></Fragment>
      }
      </div>
    </div>
  );
}

export default App;
