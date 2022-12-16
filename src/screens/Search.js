import React, {useState, useEffect} from 'react';

import styles from '../styles/Search';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from '@rneui/themed';

import {
    View,
    Image,
    ScrollView,
    Text,
    Pressable,
    TextInput,
    Modal,
    ActivityIndicator
  } from 'react-native'; 

import { FlatList } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import productsAction from '../redux/actions/product';  

function Search() {
    const navigation = useNavigation()
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false)
    const [search, setSearch] = useState("")
    const [inputSearch, setInput] = useState("")
    const [filter, setFilter] = useState()
    const [sort, setSort] = useState()
    const [price, setPrice] = useState()

    useEffect(()=>{
        let pagination = "page=1&limit=10"
        if (filter) pagination += `&filter=${filter}`
        if (sort) pagination += `&sortby=${sort}`
        if (price) pagination += `&price=${price}`
        if (inputSearch) pagination += `&search=${inputSearch}`
        if (filter || sort || price || inputSearch) {
            dispatch(productsAction.resetProductsFulfilled());
            dispatch(productsAction.getFilterThunk(pagination))}
        if (!filter && !sort && !price && !inputSearch) {
            dispatch(productsAction.resetProductsFulfilled());
            dispatch(productsAction.getProductsThunk(pagination))}
    },[filter,sort,price,inputSearch])

    useEffect(() => {
        const removeFocusevent = navigation.addListener('focus', e => {
            // dispatch(productsAction.getProductsThunk("page=1&limit=10"))
        });
        const removeBlurEvent = navigation.addListener('blur', e => {
            // dispatch(productsAction.resetProductsFulfilled());
        });
        return () => {
          removeFocusevent();
          removeBlurEvent();
        };
      }, [navigation,product.Products]);

    //   useEffect(()=>{
    //     if (product.Products.length === 0) {
    //         dispatch(productsAction.getProductsThunk("page=1&limit=10"))
    //     }
    // },[])

    const getPagination = async () => {
        if (!product.nextPage) return;
        if (product.isLoading) return;
        // if (filter || sort || price) return dispatch(productsAction.getFilterThunk(product.nextPage))
        if (!product.isLoading) dispatch(productsAction.getProductsThunk(product.nextPage))
    }

    const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
        console.log(keyValue);
        if(keyValue === 'Enter')
        {
          console.log("enter");
        }
    }

    const costing = (price) => {
        return (
          "IDR " +
          parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
      };

      const renderFooter = () => {
        return  (<View style={{flex: 1, paddingVertical: 20, justifyContent: 'center', paddingBottom: 10}}>
            {product.Products.length !== 0 && product.isLoading && <ActivityIndicator size='large' color='black' />}
            {/* {product.Products.length !== 0 && !product.nextHistory && <Text style={{textAlign: 'center', color: 'black', fontFamily: 'Poppins-Regular'}}>No more transcations history</Text>} */}
        </View>)
    }

    useEffect(()=>{
        console.log(search);
        console.log(inputSearch);
    },[search, inputSearch])

  return (
    <View style={{flex: 1}}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>Products</Text>
        </View>
        <View style={styles.scrolles}>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.filter} onPress={()=>setModalVisible(true)}>FILTER</Text>
                    <View style={styles.boxInput}>
                        <TextInput placeholder='Input Search Here...' value={search} placeholderTextColor={"#9F9F9F"} style={styles.input} onChangeText={(text)=>{setSearch(text)}}/>
                        <Divider orientation="vertical" width={1} subHeader/>
                        <IconComunity name={inputSearch.length === 0 ? "magnify" : "window-close"} size={20} style={styles.icons} onPress={()=>{
                            search.length !== 0 && setInput(search)
                            search.length !== 0 && inputSearch.length !== 0 && setInput("") && setSearch("")
                        }}/>
                    </View>
                </View>
                <Text style={styles.category}>All Products</Text>
                <>
                    {/* {product.Products?.map((data)=>{
                        if(data.product_name !== "none"){
                            return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.id)}}>
                                        <Image source={{uri: data.image}} style={styles.imgProduct}/>
                                        <View>
                                            <Text style={styles.titleFood}>{data.product_name}</Text>
                                            <Text style={styles.priceFood}>{costing(data.price)}</Text>
                                        </View>
                                    </Pressable>
                                </>
                            )
                        }
                    })} */}
                {!product.isLoading && product.Products.length === 0 && (
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 200}}>
                        <Text style={{fontFamily: 'Poppins-Bold'}}>PRODUCT NOT FOUND</Text>
                    </View>
                )}
                {product.isLoading && product.Products.length === 0 ?
                 (
                 <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, paddingTop: 200}}>
                    <ActivityIndicator size={"large"}/>
                 </View>) : <FlatList
                    data={product.Products}
                    renderItem={({item}) => {
                        if (item.product_name !== "none") {
                        return (
                        <>
                            <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", item.id)}}>
                                <Image source={{uri: item.image}} style={styles.imgProduct}/>
                                <View>
                                    <Text style={styles.titleFood}>{item.product_name}</Text>
                                    <Text style={styles.priceFood}>{costing(item.price)}</Text>
                                </View>
                            </Pressable>
                        </>
                    )}}}
                    // onEndReachedThreshold={0.5}
                    onEndReached={getPagination}
                    // style={{flex: 1}}
                    contentContainerStyle={styles.containerCard} 
                    // numColumns={2}
                    // columnWrapperStyle={styles.containerCard}
                    numColumns={2}
                    // alwaysBounceVertical
                    // horizontal
                    ListFooterComponent={renderFooter}
                />}
                </>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{position: 'absolute', right: 15, top: 15}}>
                            <IconComunity name={"window-close"} size={20} style={{color: '#6f6f6f'}} onPress={()=>setModalVisible(false)}/>
                        </View>
                        <Text style={styles.titleFilter}>Category :</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 180, alignItems: 'center', justifyContent: 'center',marginBottom: 10}}>
                            <Text style={filter === "foods" ? styles.buttonFilter : styles.button} onPress={()=>{filter === "foods" ? setFilter() : setFilter("foods")}}>Food</Text>
                            <Text style={filter === "coffee"? styles.buttonFilter : styles.button} onPress={()=>{filter === "coffee" ? setFilter() : setFilter("coffee")}}>Coffee</Text>
                            <Text style={filter === "non coffee"? styles.buttonFilter : styles.button} onPress={()=>{filter === "non coffee" ? setFilter() : setFilter("non coffee")}}>Non Coffee</Text>
                            <Text style={filter === "addon"? styles.buttonFilter : styles.button} onPress={()=>{filter === "addon" ? setFilter() : setFilter("addon")}}>Add on</Text>
                        </View>
                        <Text style={styles.titleFilter}>Sort :</Text>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <Text style={sort === "newest" ? styles.buttonFilter :styles.button} onPress={()=>{sort === "newest" ? setSort() : setSort("newest")}}>Newest</Text>
                            <Text style={sort === "latest" ? styles.buttonFilter :styles.button} onPress={()=>{sort === "latest" ? setSort() : setSort("latest")}}>Latest</Text>
                        </View>
                        <Text style={styles.titleFilter}>Price :</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={price==="cheap"?styles.buttonFilter:styles.button} onPress={()=>{price === "cheap" ? setPrice() : setPrice("cheap")}}>Cheap</Text>
                            <Text style={price==="pricey"?styles.buttonFilter:styles.button} onPress={()=>{price === "pricey"? setPrice() :setPrice("pricey")}}>Pricey</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    </View>
  )
}

export default Search