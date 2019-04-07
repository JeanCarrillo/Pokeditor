import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
  //    TO DO : add a way to modify/write a json file
      labyrinth: [
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "502", "503", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "505", "504", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"],
        ["008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008"]
      ],
      selectedTile: "000"
    }
    this.selectTile = this.selectTile.bind(this)
    this.changeTile = this.changeTile.bind(this)
  }
  //    TO DO : add a way to get file list from assets/tiles folder...
  //    ADD YOUR TILES HERE
  files = ["000", "002", "003", "004", "005", "006", "007", "008", "010", "015",
    "016", "017", "018", "018", "019", "020", "021", "022", "023", "024", "500",
    "501", "502", "503", "504", "505"]

  selectTile(event) {
    this.setState({ selectedTile: event.target.value })
  }

  changeTile = (rowIndex, colIndex) => () =>{
    let labyrinth = [...this.state.labyrinth]
    labyrinth[rowIndex][colIndex] = this.state.selectedTile
    this.setState({labyrinth})
  }

  render() {
    return (
      <div className="App">
        <h1>Pokeditor</h1>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ float: 'left', marginRight: '5px',textDecoration:"underline"}}>Choose your tile : </p>

          <div>
            {
              this.files.map((file, index) => (
                <button
                  style={{
                    backgroundImage: `url(${"./assets/tiles/" + this.files[index] + ".png"})`,
                    marginRight: '3px'
                  }}
                  className="Tile"
                  value={file}
                  key={index}
                  onClick={(event) => this.selectTile(event)}
                />
              ))
            }
          </div>



        </div>
        <div className="Board">
          <table>
            <tbody>
              {
                this.state.labyrinth.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((tileId, colIndex) =>
                      <th key={colIndex}>
                        <button
                          style={{
                            backgroundImage: `url(${"./assets/tiles/" + tileId + ".png"})`,
                          }}
                          className="Tile"
                          value={tileId}
                          onClick={this.changeTile(rowIndex, colIndex)}
                        />
                        {
                       
                        }
                      </th>
                    )}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>


        <div>
        <p style={{textDecoration:"underline"}}>Matrix :</p>
          <table style={{fontSize:"0.9em"}}>
            <tbody>
              {
                this.state.labyrinth.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                  {rowIndex === 0 && "["}
                    [
                    {row.map((tileId, colIndex) =>
                      <th key={colIndex}>
                        "{tileId}", 
                      </th>
                    )}
                    {rowIndex < this.state.labyrinth.length- 1 ? "],": "]]"}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
