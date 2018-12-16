import React,{Component} from 'react';
import './TableComponent.scss';
import RowComponent from '../rowComponent/RowComponent';
class TableComponent extends Component {
    renderHeader=()=>{
        if(this.props.header == 'true'){
            return(
                <thead className="headerTable">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">song</th>
                        <th scope="col">album</th>
                        <th scope="col">time</th>
                        <th scope="col">play</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
            )
        }
    }
    renderRow=(image)=>{
        if(this.props.type == 'playlist' ){
          return(
            <RowComponent song="Just Like The fire" singer="Laday Gaga" image={image} time="08:10" type={this.props.type} />
          )
        }
        if(this.props.type == 'tracks' ){
          return(
            <RowComponent song="Paper Thin" album="Astrid S" image={image} time="08:10" type={this.props.type} />
          )
        }
        if(this.props.type == 'album'){
            return(
                <RowComponent song="Paper Thin" album="Astrid S" time="08:10" type={this.props.type} />
              )
          }

    }
    render(){
        return(
            
            <table className="table">
                {this.renderHeader()}
                {this.renderRow("card-2.jpg")}
                {this.renderRow("card-1.jpg")}
                {this.renderRow("card-4.jpg")}
                {this.renderRow("card-5.jpg")}
                {this.renderRow("card-2.jpg")}
                {this.renderRow("card-1.jpg")}
                {this.renderRow("card-4.jpg")}
                {this.renderRow("card-5.jpg")}
            </table>
        )
        }
}
export default TableComponent;