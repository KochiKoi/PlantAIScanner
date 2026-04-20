// File: src/screens/SplashScreen.tsx

import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { useRouter } from 'expo-router';

// Đảm bảo import đúng đường dẫn file style của bạn
import { splashStyles } from '../styles/splashstyles';

export default function SplashScreen() {
  const router = useRouter();
  
  // Khởi tạo biến hiệu ứng
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Chạy song song 2 hiệu ứng
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,           
        duration: 1200,       
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,           
        friction: 4,          
        useNativeDriver: true,
      })
    ]).start();

    // Chuyển trang sau 2.5 giây
    const timer = setTimeout(() => {
      router.replace('/tabs/profile'); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [router, fadeAnim, scaleAnim]);

  return (
    // 1. Lớp ngoài cùng lo màu nền
    <View className={splashStyles.container}>
      
      {/* 2. Lớp Animated KHÔNG dùng className, chỉ dùng style để tạo hiệu ứng */}
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
        
        {/* 3. Lớp View thường bên trong lo việc căn giữa chữ (Tailwind) */}
        <View className={splashStyles.animationWrapper}>
          <Text className={splashStyles.icon}>🌱</Text>
          <Text className={splashStyles.brandName}>AIPlantScanner</Text>
          <Text className={splashStyles.slogan}>Đang khởi tạo AI...</Text>
        </View>

      </Animated.View>

    </View>
  );
}