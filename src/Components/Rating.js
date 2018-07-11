import React , {Component} from 'react'

class Rating extends Component {

    showRating = (rating) => {
      let result = [];
      for(let i = 1; i <= rating; i++) {
          result.push(i);
      }
      for(let i = 5; i > rating; i--) {
        result.push(i);
      }
      result = result.map((r) => {
        if(r <= rating){
            return <li key = {r} className = "active-rate">
            <i className="fas fa-star"></i>
          </li>
        }else{
          return <li key = {r} >
          <i className="fas fa-star"></i>
        </li>
        }
      });
      console.log(result);
      return result;
    }

    render() {

      return (
        <ul className = "rating">
          {this.showRating(this.props.rating)}
        </ul>
      );
    }
}

export default Rating
