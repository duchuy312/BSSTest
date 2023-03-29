import React, {useEffect} from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux'
import { rootActions, selectRoot } from "../redux/reduxSaga/Root/RootRedux";
import UserList from "./components/userList";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const state = useSelector(selectRoot);
    const getUser = () => {
        dispatch(rootActions.getUsers());
    }
    const handleClick = () => {
        getUser();
    }
    useEffect(() => {
        if (state.userList.length === 0) {
            getUser();
        }
    }, [])
    return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.fetchBtn} onPress={() => handleClick()}>
                    <Text style={styles.btnText}>
                        {'Fetch RanDom'}
                    </Text>
                </TouchableOpacity>
                <UserList data={state.userList} />
            </View>
    )
}

export default HomeScreen