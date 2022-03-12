import React, { useState } from "react";
import {
    TouchableOpacity,
    TextInput,
    Text,
    View
} from "react-native";
import { styles } from "./style";

const AddTodo = ({
    onPressAdd,
}) => {
    const [value, setValue] = useState("");

    const handleOnPressAdd = () => {
        onPressAdd(value)
        setValue("");
    }

    return <View style={styles.container}>
        <TextInput
            placeholder="Todo Title"
            style={[
                styles.input,
                !value.length && styles.inputDisabled
            ]}
            testID="addTodoInput"
            onChangeText={setValue}
            value={value}
            onSubmitEditing={handleOnPressAdd}
        />
        <TouchableOpacity
            disabled={!value.length}
            style={[
                styles.button,
                !value.length && styles.buttonDisabled
            ]}
            onPress={handleOnPressAdd}
            activeOpacity={0.8}
            testID="addTodoButton"
        >
            <Text style={styles.buttonTitle}>
                Add
            </Text>
        </TouchableOpacity>
    </View>
};

export default AddTodo;