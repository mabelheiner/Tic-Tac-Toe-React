class Square extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("button", {
        className: "square",
        onClick: () => this.props.onClick() },

      this.props.value));


  }}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null) };

  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return /*#__PURE__*/(
      React.createElement(Square, {
        value: this.state.squares[i],
        onClick: () => this.handleClick(i) }));


  }

  render() {
    const status = 'Next player: X';

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "status" }, status), /*#__PURE__*/
      React.createElement("div", { className: "board-row" },
      this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderSquare(6), this.renderSquare(7), this.renderSquare(8))));



  }}


class Game extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "game" }, /*#__PURE__*/
      React.createElement("div", { className: "game-board" }, /*#__PURE__*/
      React.createElement(Board, null)), /*#__PURE__*/

      React.createElement("div", { className: "game-info" }, /*#__PURE__*/
      React.createElement("div", null), /*#__PURE__*/
      React.createElement("ol", null))));



  }}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(Game, null));