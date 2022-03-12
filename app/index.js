import React, { useState } from "react";
import {
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from "react-native";
import AddTodo from "./components/addTodo";
import TodoCard from "./components/todoCard";

const App = () => {
    const [todoItems, setTodoItems] = useState([]);

    const createTodo = (todoText) => {
        setTodoItems((todos) => [
            {
                title: todoText
            },
            ...todos,
        ]);
    };

    const deleteTodo = (index) => {
        setTodoItems((todos) => todos.filter((_, i) => i !== index));
    };

    return <SafeAreaView style={styles.container}>
        <AddTodo
            onPressAdd={(todoText) => createTodo(todoText)}
        />
        <ScrollView
            showsVerticalScrollIndicator={false}
            testID="todoList"
        >
            {todoItems.map((item, index) => {
                return <TouchableOpacity onPress={() => deleteTodo(index)}>
                    <TodoCard
                        title={item.title}
                    />
                </TouchableOpacity>
            })}
        </ScrollView>

    </SafeAreaView>
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
    }
});

export default App;