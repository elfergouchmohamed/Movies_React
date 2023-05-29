import React, { Component } from 'react'
import { View,Image,Text,StyleSheet,Button } from 'react-native'
import { getMovieDetails,getFilmImage } from '../API/tmdbapi'

export default class FilmDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      details:{},
      loading:false
    }
  }
  load_details(idf){
    this.setState({loading:true})
    getMovieDetails(idf).then((data)=>{
      console.log(data)
      this.setState({
        details:{...data},
        loading:false
      })
    })
  }
  componentDidMount(){
    this.load_details(this.props.route.params.idfilm)
  }
  
  render() {
    return (
      <View style={styles.global_container_style}>
        <Image style={styles.image_style} source={{uri:getFilmImage(this.state.details.backdrop_path)}}/>
        <View style={styles.container_style}>
          <Text>{this.state.details.title}</Text>
          <Image source={require("../assets/heart.png")}/>
          <Text style={styles.description_style}>{this.state.details.overview}</Text>
        </View>
        <View>
            <Text>Sorti le {this.state.details.release_date}</Text>
            <Text>Note : {this.state.details.vote_average}</Text>
            <Text>Nombre de vote {this.state.details.vote_count}</Text>
            {this.state.details.genres?.map((g)=>{return(<Button title={g.name} key={g.id} style={styles.genre_btn}></Button>)})}
            <Text>Compagnies : {this.state.details.production_companies?.map((g)=>{return(<Image key={g.id} source={{uri:getFilmImage(g.logo_path)}} size={50} style={styles.companies_img}/>)})} </Text> 
            
            <Text>Acteur</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  global_container_style:{
    height:190,
    width:400,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  companies_img:{
  },
  image_style:{
    width:400,
    height:200,
    marginBottom:10,
  },
 container_style:{
    justifyContent:'center',
    alignItems:'center',  
    marginBottom:40,
  },
  description_style:{
  },
  genre_btn:{
    marginVertical: 10,
    marginTop:10
  }
})
