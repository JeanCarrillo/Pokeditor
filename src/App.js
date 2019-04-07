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
      selectedTile: "000",
      playerOneX: 0,
      playerOneY: 0,
      playerTwoX: 0,
      playerTwoY: 0
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

  changeTile = (rowIndex, colIndex) => () => {
    if (this.state.selectedTile === 'p1') {
      this.setState({ playerOneX: rowIndex, playerOneY: colIndex })
      return
    }
    if (this.state.selectedTile === 'p2') {
      this.setState({ playerTwoX: rowIndex, playerTwoY: colIndex })
      return
    }
    let labyrinth = [...this.state.labyrinth]
    labyrinth[rowIndex][colIndex] = this.state.selectedTile
    this.setState({ labyrinth })
  }

  render() {
    return (
      <div className="App">
        <h1>Pokeditor</h1>

        <div style={{ marginBottom: '5px' }}>
          <p style={{ float: 'left', marginRight: '5px', textDecoration: "underline" }}>Choose your tile : </p>
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

        <div>
          <p style={{ float: 'left', marginRight: '5px', textDecoration: "underline" }}>Starting point : </p>
          <div>
            <p>Player 1
            <button
                style={{
                  background: `url("./assets/characters/charBottom.png"), url("./assets/tiles/008.png")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
                className="Tile"
                value="p1"
                onClick={(event) => this.selectTile(event)}
              />
              Player 2
            <button
                style={{
                  backgroundImage: `url("./assets/characters/charLeft.png"), url("./assets/tiles/008.png")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
                className="Tile"
                value="p2"
                onClick={(event) => this.selectTile(event)}
              />
            </p>
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
                          // Display Players, I hope you enjoy spaghettis
                          style={{
                            backgroundImage:
                              (
                                (
                                  ((rowIndex === this.state.playerOneX && colIndex === this.state.playerOneY) || (rowIndex === this.state.playerTwoX && colIndex === this.state.playerTwoY)) ?
                                    ((rowIndex === this.state.playerOneX && colIndex === this.state.playerOneY) ?
                                      `url('./assets/characters/charBottom.png'), url(${"./assets/tiles/" + tileId + ".png"})`
                                      : ((rowIndex === this.state.playerTwoX && colIndex === this.state.playerTwoY) ?
                                        `url('./assets/characters/charLeft.png'), url(${"./assets/tiles/" + tileId + ".png"})`
                                        : `url(${"./assets/tiles/" + tileId + ".png"})`
                                      ))
                                    : `url(${"./assets/tiles/" + tileId + ".png"})`
                                )
                              ),
                            backgroundRepeat: 'no-repeat, no-repeat',
                            backgroundPosition: 'center, center'
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
          <p style={{ textDecoration: "underline" }}>Matrix :</p>
          <div style={{ fontSize: "0.8em", lineHeight: "0.3em" }}>
            {
              this.state.labyrinth.map((row, rowIndex) => (
                <p key={rowIndex}>
                  {rowIndex === 0 && "["}[
                    {row.map((tileId, colIndex) =>
                    <span key={colIndex}>
                      "{tileId}"
                        {colIndex < this.state.labyrinth[rowIndex].length - 1 && ","}
                    </span>
                  )}
                  {rowIndex < this.state.labyrinth.length - 1 ? "]," : "]]"}
                </p>
              ))
            }
          </div>
          <p style={{ textDecoration: "underline" }}>Players starting coordinates :</p>
          <p style={{ fontSize: "0.9em", lineHeight: "0.3em" }}>Player 1: {this.state.playerOneX}, {this.state.playerOneY}</p>
          <p style={{ fontSize: "0.9em", lineHeight: "0.3em" }}>Player 2: {this.state.playerTwoX}, {this.state.playerTwoY}</p>
        </div>




      </div>
    )
  }
}

export default App;
