import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <View>
            <Button title="ağlama"
                onClick={() =>
                console.log("deneme")}>
                -
            </Button>
            <Text>{count}</Text>
            <Button title="deneme"
                onClick={() => console.log("log")}>
                +
            </Button>
        </View>
    )
}

export default Counter
