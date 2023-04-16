import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import Card from '../components/Card';
import ListSection, {IListSection} from '../components/ListSection';
import {getInfo} from '../services/HomeService';
import CustomText from '../components/CustomText';
import {convertTimestampToDate} from '../utils/DateConverter';

interface IInfo {
  tier: string;
  tierDesc: string;
  availableCoin: number;
  totalCoin: number;
  coinDesc: string;
  updatedDate: number;
  listSection: IListSection[];
}

const footerData = [
  {image: require('../assets/images/home.png'), navigator: ''},
  {image: require('../assets/images/notify.png'), navigator: ''},
  {image: require('../assets/images/wallet.png'), navigator: ''},
  {image: require('../assets/images/person.png'), navigator: ''},
];

const Home = (): JSX.Element => {
  const [data, setData] = useState<IInfo>();

  const fetchApi = async () => {
    const _data: IInfo = await getInfo();
    setData(_data);
  };

  const processBar = (data: IInfo) => {
    const percent = (data?.availableCoin / data?.totalCoin) * 100;
    return (
      <View style={styles.processBar}>
        <View
          style={[styles.processBarAvailable, {width: `${percent}%`}]}></View>
      </View>
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../assets/images/circle_left.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <CustomText style={styles.headerTitle}>{data?.tier}</CustomText>
            <CustomText style={styles.headerDesc}>{data?.tierDesc}</CustomText>
          </View>
          <View style={styles.coinBalance}>
            <Card>
              <ImageBackground
                source={require('../assets/images/coin_balance.png')}
                resizeMode="cover">
                <View style={styles.coinBalanceContent}>
                  <CustomText style={styles.coinBalanceTitle}>
                    Available Coin balance
                  </CustomText>
                  <CustomText style={styles.coinBalanceNumber}>
                    {data?.availableCoin}
                  </CustomText>
                  {data && processBar(data)}
                  <CustomText style={styles.coinBalanceDesc}>
                    {data?.coinDesc}
                  </CustomText>
                  <TouchableOpacity
                    style={styles.linkContent}
                    onPress={() => {}}>
                    <CustomText style={styles.coinBalanceLink}>
                      View tier benefits
                    </CustomText>
                    <Image
                      source={require('../assets/images/arrow_right.png')}
                      style={styles.linkIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.coinBalanceButton}
                    onPress={() => {}}>
                    <CustomText style={styles.coinBalanceButtonText}>
                      My Coupons
                    </CustomText>
                  </TouchableOpacity>
                  <CustomText style={styles.coinBalanceUpdate}>
                    Updated : {convertTimestampToDate(data?.updatedDate || 0)}
                  </CustomText>
                </View>
              </ImageBackground>
            </Card>
          </View>
        </View>
        <View style={styles.sectionItem}>
          {data?.listSection &&
            data?.listSection.map((item, index) => {
              return <ListSection {...item} key={item.toString() + index} />;
            })}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        {footerData &&
          footerData.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={item.image}
                  style={styles.footerIcon}
                  key={item.image.toString() + index}
                />
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: '100%',
    height: 420,
    backgroundColor: '#171725',
  },
  backIcon: {
    width: 40,
    height: 40,
    margin: 24,
  },
  headerInfo: {
    paddingHorizontal: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600',
  },
  headerDesc: {
    color: '#B5B5BE',
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 8,
    fontWeight: '400',
  },
  coinBalance: {
    position: 'absolute',
    left: 0,
    bottom: -260,
    width: '100%',
    paddingHorizontal: 16,
  },
  coinBalanceContent: {
    width: '100%',
  },
  coinBalanceTitle: {
    color: '#B5B5BE',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
  },
  coinBalanceNumber: {
    color: '#171725',
    fontSize: 48,
    lineHeight: 56,
    paddingTop: 8,
    fontWeight: '400',
  },
  processBar: {
    width: '100%',
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#E2E2EA',
    marginVertical: 34,
  },
  processBarAvailable: {
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#0062FF',
  },
  coinBalanceDesc: {
    color: '#B5B5BE',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    paddingVertical: 16,
  },
  linkContent: {
    flexDirection: 'row',
  },
  coinBalanceLink: {
    color: '#0062FF',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  linkIcon: {
    width: 24,
    height: 24,
  },
  coinBalanceButton: {
    height: 60,
    borderRadius: 4,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171725',
  },
  coinBalanceButtonText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  coinBalanceUpdate: {
    fontSize: 14,
    lineHeight: 20,
    color: '#B5B5BE',
    alignSelf: 'center',
    fontWeight: '400',
  },
  sectionItem: {
    marginTop: 300,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderColor: '#E2E2EA',
  },
  footerIcon: {
    width: 32,
    height: 32,
  },
});

export default Home;
