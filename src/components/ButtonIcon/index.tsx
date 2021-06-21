import React from 'react'
import { TouchableOpacity,Image,View,Text,TouchableOpacityProps } from 'react-native'
import { styles } from './style'
import Discord from '../../assets/discord.png'
type ButtonProps = TouchableOpacityProps & {
    title:string;
}
export function ButtonIcon({title, ...rest}:ButtonProps){
    return(
        <TouchableOpacity 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={Discord} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
            {title}
            </Text>
        </TouchableOpacity>
    )
}