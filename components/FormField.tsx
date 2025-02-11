import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

export interface FormFieldProps {
    title: string,
    value?: string,
    placeholder?: string,
    handleChangeText(evt: any): void,
    otherStyles?: string,
    [x: string]: any
};

const FormField = (props: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${props.otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">{props.title}</Text>

            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={props.value}
                    placeholder={props.placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={props.handleChangeText}
                    secureTextEntry={props.title === "Password" && !showPassword}
                    {...props}
                />

                {props.title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
