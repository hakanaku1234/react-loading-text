import React from "react";
import ReactDOM from "react-dom";
import Minitel from "../src/index";

const App = () => {
  const css = `
        .wrapper {
          display:flex;
          width: 100vw;
          height: 100vh;
        }
        .center {
          margin: auto;
        }
        .MinitelDemo {
            width : 600px;
            background-color: #424242;
        }
        p{
          padding: 0 0 0 0;
          margin: 0 0 0 0;
          color: #558B2F;
          font-family: DejaVu Sans Mono, monospace;
          font-weight: bold;
        }
        @media all and ( max-width : 768px) {
            .MinitelDemo{
                width: 100%;
                text-align: center;
            }
        }
    `;

  return (
    <div>
      <style>{css}</style>
      <div className="wrapper">
        <Minitel
          className="center"
          style={{
            default: [
              17,
              15,
              "#424242",
              2,
              0.4,
              "linear",
              () => alert("loading completed for default")
            ]
          }}
        >
          <div className="MinitelDemo">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dolor turpis, tristique at nunc et, sagittis sodales dui. Proin
              convallis, massa sed molestie maximus, nisi lectus imperdiet quam,
              at placerat nisl dui accumsan arcu. Mauris a libero nulla. In at
              lorem risus. Vivamus dui odio, pellentesque nec augue sit amet,
              vulputate malesuada libero. Sed accumsan vel metus in tempor.
              Donec pellentesque, quam id cursus aliquam, ante felis ultrices
              lectus, non faucibus erat magna non erat. Cras dapibus arcu
              ligula, vitae aliquet magna rutrum nec. Ut eu porttitor tortor.
              Donec ut erat semper nisl auctor tincidunt mattis at nisl.
              Suspendisse potenti. Nulla facilisi. Fusce id ligula viverra,
              ultrices purus a, rhoncus augue. Morbi sodales varius nulla, eu
              hendrerit erat sagittis et. Duis turpis ante, interdum et nisi
              nec, molestie faucibus eros. Sed pretium erat eget volutpat
              ultricies.
            </p>
          </div>
        </Minitel>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
