import React from "react";
import { connect } from "react-redux";

import { Board, Card, VictoryDialog } from "../../components";
import { selectCard, closeVictoryDialog, startGame } from "../../store/actions";

const GamePage = ({
  cards,
  onCardClick,
  isVictoryDialogOpen,
  onCloseVictoryDialog,
  onStartGame,
}) => (
  <>
    <Board>
      {cards.map((card) => (
        <Card
          key={card.key}
          name={card.name}
          isActive={card.isActive}
          onClick={() => {
            onCardClick(card.key);
          }}
        />
      ))}
    </Board>
    <VictoryDialog
      isOpen={isVictoryDialogOpen}
      onClose={onCloseVictoryDialog}
      onGameRestart={onStartGame}
    />
  </>
);

const mapStateToProps = (state) => ({
  cards: state.cards,
  isVictoryDialogOpen: state.isVictoryDialogOpen,
});
//mapeira o estado para a propriedade
// const mapDispatchToProps = (dispatch) => ({
//   onCardClick: (card) => {
//     // dispatch({ type: "SELECT_CARD", key: card.key });
//     dispatch(selectCard(card.key));
//   },
// });

const mapDispatchToProps = {
  onCardClick: selectCard,
  onCloseVictoryDialog: closeVictoryDialog,
  onStartGame: startGame,
};

//despara uma action com o tipo "SELCT CARD"
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

// class GamePage extends React.Component {
//   state = { isActive: false };

//   handleCardClick = () => {
//     this.setState((prevState) => ({
//       isActive: !prevState.isActive,
//     }));
//   };
//   render() {
//     return (
//       <Board>
//         <Card
//           name="Test card"
//           isActive={this.state.isActive}
//           onClick={this.handleCardClick}
//         />
//       </Board>
//     );
//   }
// }
