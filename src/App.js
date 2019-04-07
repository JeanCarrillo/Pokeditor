import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labyrinth: [
        ["500", "002", "500", "500", "500", "500", "500", "500", "500", "500", "500", "022", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500"],
        ["500", "004", "010", "010", "008", "008", "008", "008", "008", "500", "500", "023", "500", "500", "500", "008", "008", "500", "500", "008", "008", "008", "008", "008", "500"],
        ["500", "003", "500", "500", "010", "500", "500", "500", "008", "008", "008", "024", "500", "500", "008", "500", "008", "500", "008", "008", "500", "500", "500", "008", "500"],
        ["500", "000", "500", "501", "008", "000", "000", "500", "008", "500", "500", "024", "008", "008", "008", "500", "008", "500", "008", "500", "500", "008", "500", "008", "500"],
        ["500", "002", "500", "008", "502", "503", "000", "500", "008", "500", "008", "024", "500", "500", "008", "500", "008", "008", "008", "500", "500", "008", "500", "008", "500"],
        ["500", "003", "500", "016", "505", "504", "500", "500", "008", "500", "008", "008", "500", "500", "008", "500", "500", "500", "008", "500", "008", "008", "500", "008", "500"],
        ["500", "002", "500", "015", "008", "008", "008", "008", "008", "500", "008", "008", "008", "008", "008", "500", "008", "008", "008", "008", "008", "500", "500", "500", "500"],
        ["500", "004", "500", "500", "008", "500", "500", "000", "500", "500", "008", "500", "500", "008", "500", "500", "008", "500", "500", "500", "500", "500", "500", "008", "500"],
        ["500", "003", "010", "010", "008", "500", "000", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "008", "500"],
        ["500", "000", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500"]
      ],
      selectedTile: '000'
    }
    this.selectTile = this.selectTile.bind(this)
  }
  //    TO DO : add a way to get file list from assets/tiles folder...
  files = ['000', '002', '003', '004', '005', '006', '007', '008', '010', '015',
    '016', '017', '018', '018', '019', '020', '021', '022', '023', '024', '500',
    '501', '502', '503', '504', '505']
  selectTile(event) {
    this.setState({ selectedTile: event.target.value })
  }
  changeTile(row, col) {
    const lab = this.state.labyrinth
    lab[row][col] = this.state.selectedTile
    this.setState({ labyrinth: lab })
  }
  render() {
    return (
      <div className="App">
        <h1>Pokeditor</h1>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ float: 'left', marginRight: '10px' }}>Choose your tile : </p>

          <div>
            {
              this.files.map((file, index) => (
                <button
                  style={{
                    backgroundImage: `url(${"./assets/tiles/" + this.files[index] + ".png"})`,
                    marginRight: '5px'
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
                      </th>
                    )}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
          <pre><code>{this.state.labyrinth}</code></pre>
        </div>
      </div>
    )
  }
}


class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tileId: this.props.tileId,
      selectedTile: this.props.selectedTile
    }
  }

  changeTile() {
    this.setState({ tileId: this.state.selectedTile })
  }
  render() {
    return (
      <button
        style={{
          backgroundImage: `url(${"./assets/tiles/" + this.state.tileId + ".png"})`,
        }}
        className="Tile"
        value={this.state.tileId}
        onClick={this.changeTile}
      />
    );
  }
}


export default App;
