import React, { useState } from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

type IProps = {
    props?: any,
    data: any[],
    item?: any,
    onPressUser?: (id: number) => void
}


const UserList = (props: IProps) => {
    const { data } = props;
    const [selectedID, setSelectedID] = useState(null);
    
    const renderItem = (item: any) => {
        return (
            selectedID !== item.id ? (
                <TouchableOpacity style={styles.userCard} onPress={() => setSelectedID(item.id)}>

                    <Image resizeMode='stretch' style={styles.avatar} source={{ uri: item.avatar }} />
                    <Text style={styles.nameText}>{item.first_name} {item.last_name}</Text>
                    <Text style={styles.contentText}>{item.employment.title}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.userCardView} onPress={() => setSelectedID(null)}>
                    <Text style={styles.contentTextLeft}>Name: {item.first_name} {item.last_name}</Text>
                    <Text style={styles.contentTextLeft}>Birth: {item.date_of_birth}</Text>
                    <Text style={styles.contentTextLeft}>Gender: {item.gender}</Text>
                    <Text style={styles.contentTextLeft}>Phone: {item.phone_number}</Text>
                    <Text style={styles.contentTextLeft}>Email: {item.email}</Text>
                    <Text style={styles.contentTextLeft}>Subscription Plan: {item.subscription.plan}</Text>
                    <Text style={styles.contentTextLeft}>Country: {item.address.country}</Text>
                </TouchableOpacity>
            )
        )
    }

    return (
        <FlatList
            style={styles.listContainer}
            data={data}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item: any) => item.id}
            numColumns={2}
        />
    )
}

export default UserList