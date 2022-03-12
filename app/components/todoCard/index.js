import React from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";
import { styles } from "./style";

const TodoCard = ({
    title,
}) => {
    return <TouchableOpacity
        style={styles.container}
    >
        <Text>
            {title}
        </Text>
    </TouchableOpacity>
};

export default TodoCard;