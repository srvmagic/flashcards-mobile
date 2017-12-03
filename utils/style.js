import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import * as colors from '../utils/colors';


let CenteredComplete = {
    justifyContent: 'center',
    alignItems: 'center'
}

// ListDecks styles
let ListDecksStyles = {
    container: {
        flex: 1,
        padding: 10
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    noDecks: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

let DecksStyles = {
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0C0658',
        borderWidth: 1,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        marginBottom: 20,
        shadowRadius: 6,
        shadowOpacity: .5,
        shadowColor: 'rgba(0,0,0,24)',
        shadowOffset: {
            width: 1,
            height: 5
        }
    },
    title: {
        fontSize: 20,
        color : 'red'
    },
    numerics: {
        fontSize: 10,
        color: 'green'
    }
}

let DeckDetailStyles = {
    deckView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    headerText: {
        fontSize: 30,
    },
    detailText: {
        fontSize: 25,
        color: '#BBB'
    },
    addCardButton: {
        backgroundColor: colors.orange,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },
    startQuizButton: {
        backgroundColor: colors.orange,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    }
}

let AddDeck = {
    addDeck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headingText: {
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center'
    },
    inputStyle: {
        flex : 1,
        alignSelf: 'stretch',
        height: 80,
        fontSize: 20,
        alignItems: 'center'
    },
    err: {
        color: '#F00',
        fontSize: 20
    }
}

let addQuizItem = {
    AddQuiz: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addCardInput: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        fontSize: 30
    },
    addQuizItemButton: {
        backgroundColor: colors.orange,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    addCarderr: {
        color: '#F00',
        fontSize: 20
    }
}

let quizStyle = {
    counterText: {
        fontSize: 10
    },
    quizLayout: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    quizFontStyle: {
        fontSize: 35,
        textAlign: 'center'
    },
    toggleButtonText: {
        fontSize: 20,
        color: '#F00'
    },
    toggleButton: {
        marginTop: 20
    },
    correctButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: colors.orange,
        marginTop: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    incorrectButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor:colors.purple,
        marginTop: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    examButtonText: {
        color: '#FFF',
        fontSize: 20
    },
    scoreHeading: {
        fontSize: 30
    },
    score: {
        fontSize: 50,
        color: '#FFF'
    },
    buttonContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

let textButtonStyles = {
    reset: {
        textAlign: 'center',
        color: colors.purple
    }
}

export const style = StyleSheet.create({
    CenteredComplete,
    ...ListDecksStyles,
    ...DecksStyles,
    ...DeckDetailStyles,
    ...AddDeck,
    ...addQuizItem,
    ...quizStyle,
    ...textButtonStyles
});