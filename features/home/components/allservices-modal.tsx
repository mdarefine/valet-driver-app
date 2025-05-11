import { Dimensions, View } from 'react-native'
import React, { forwardRef, useCallback } from 'react'
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlashList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet'
import { Text } from '@/components/ui/text'
import AppFeatureDetail from './app-feature-detail'
import CarWashIcon from '@/assets/svgs/home/CarWashIcon'
import MaintainenceIcon from '@/assets/svgs/home/MaintainenceIcon'
import CarShopIcon from '@/assets/svgs/home/CarShopIcon'
import DocumentIcon from '@/assets/svgs/home/DocumentIcon'
import InsuranceIcon from '@/assets/svgs/home/InsuranceIcon'
import SellCarsIcon from '@/assets/svgs/home/SellCarIcon'
import BuyCarsIcon from '@/assets/svgs/home/BuyCarsIcon'
import TowingIcon from '@/assets/svgs/home/TowingIcon'
import MyCarsIcon from '@/assets/svgs/home/MyCarsIcon'
import ValetIcon from '@/assets/svgs/home/ValetIcon'
import { router } from 'expo-router'

const width = Dimensions.get('screen').width
const AllServiceModal = forwardRef<BottomSheetModal, {}>((_, ref) => {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  )
  const onPressBack = useCallback(
    () => (ref as React.RefObject<BottomSheetModal>)?.current?.dismiss(),
    [ref]
  )

  const modalClose = () => {
    ; (ref as React.RefObject<BottomSheetModal>)?.current?.dismiss()
  }

  const data = [
    { title: 'Car Wash', icon: <CarWashIcon /> },
    { title: 'Maintenance', icon: <MaintainenceIcon /> },
    { title: 'Insurance', icon: <InsuranceIcon /> },
    { title: 'Documents', icon: <DocumentIcon /> },
    { title: 'Shop', icon: <CarShopIcon /> },
    { title: 'Sell Cars', icon: <SellCarsIcon /> },
    { title: 'Buy Cars', icon: <BuyCarsIcon /> },
    { title: 'Towing', icon: <TowingIcon /> },
    { title: 'Valet Service', icon: <ValetIcon /> },
    { title: 'My Cars', icon: <MyCarsIcon /> },
  ]

  const onItemPress = (title: string) => {
    switch (title) {
      case 'Valet Service':
        router.push('/(app)/car-valet')
        modalClose()
        router.push('/(app)/car-valet');
        break;
      case 'Towing':
        router.push('/(app)/car-towing');
        break;
      case 'Sell Cars':
        router.push('/(app)/sell-cars');
        break;
      case 'Buy Cars':
        router.push('/(app)/buy-cars');
        break;
      case 'My Cars':
        router.push('/(app)/my-cars' as any);
        break;
    }
  }


  return (
    <BottomSheetModal
      ref={ref}
      backdropComponent={renderBackdrop}
      index={1}
      snapPoints={['55%']}
      onChange={(index) => {
        if (index < 0) {
          onPressBack()
        }
      }}>
      <View className="flex-row px-4 justify-between py-3 items-center">
        <Text className="!font-Urbanist500 text-2xl text-subtitle">
          All services
        </Text>
      </View>

      <BottomSheetFlashList
        numColumns={4}
        data={data}
        renderItem={({ item }) => (
          <AppFeatureDetail
            title={item.title}
            icon={item.icon}
            onPress={() => onItemPress(item.title)}
          />
        )}
        keyExtractor={(item) => item.title}
        className="px-4 py-6"
        estimatedItemSize={40}
        estimatedListSize={{ width: width * 0.25, height: 47 }}
      />
    </BottomSheetModal>
  )
})

export default AllServiceModal