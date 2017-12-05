import React from 'react';
import { StyleSheet } from 'react-native';
import * as colors from '../utils/colors';


let quizStyle = {
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff"
      },    
    container: {
        flex: 1,
        padding: 10
    },    
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0C0658',
        borderWidth: 1,
        borderRadius: 16,
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
        color : colors.orange
    },
    numerics: {
        fontSize: 10,
        color: colors.purple
    },    
    headerText: {
        fontSize: 30,
    },    
    inputStyle: {
        flex : 1,
        alignSelf: 'stretch',
        height: 80,
        fontSize: 20,
        alignItems: 'center'
    },    
    counterText: {
        fontSize: 10
    },
    score: {
        fontSize: 15
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
    aButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: colors.orange,
        marginTop: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor:colors.purple,
        marginTop: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quizText: {
        color: '#FFF',
        fontSize: 20
    },
    quizTitle: {
        color: colors.purple,
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


export const style = StyleSheet.create({
    ...quizStyle,
});