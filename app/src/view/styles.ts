import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    fetchBtn: {
        width: '40%',
        height: 48,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 8
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    listContainer: {
        width: '100%',
        backgroundColor: '#bbe6a5',
    },
    userCard: {
        width: '47%',
        backgroundColor: 'white',
        marginLeft: '2%',
        alignItems: 'center',
        marginTop: '2%',
        borderRadius: 8,
        paddingVertical: 8
    },
    userCardView: {
        width: '47%',
        backgroundColor: 'white',
        marginLeft: '2%',
        marginTop: '2%',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 4
    },
    avatar: {
        width: '90%',
        height: 150
    },
    nameText: {
        fontWeight: 'bold'
    },
    contentText: {
        textAlign: 'center'
    },
    contentTextLeft: {
        alignItems: 'flex-start',
    }
});

export default styles