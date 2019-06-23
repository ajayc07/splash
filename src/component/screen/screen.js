import React from 'react';
import './screen.scss';


export class ScreenComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            quote: '',
            fontSize: '40',
            fontFamily: 'Times New Roman',
            colors : [
                {upper : '#111111', lower : '#FFFFFF'},
                { upper : '#F96167' ,lower : '#FCE77D' },
                { upper : '#F9D342' ,lower : '#292826' },
                { upper : '#DF678C' ,lower : '#3D155F' },
                { upper : '#CCF381' ,lower : '#4831D4' },
                { upper : '#4A274F' ,lower : '#F0A07C' },
                { upper : '#2B3252' ,lower : '#EF5455' ,middle : '#FAD744' },
                { upper : '#FFF748' ,lower : '#3C1A5B' },
                { upper : '#2F3C7E' ,lower : '#FBEAEB' },
                { upper : '#EC4D37' ,lower : '#1D1B1B' },
                { upper : '#8BD8BD' ,lower : '#243665' },
                { upper : '#141A46' ,lower : '#EC8B5E' },
                { upper : '#FFFFFF' ,lower : '#8AAAE5' },
                { upper : '#295F2D' ,lower : '#FFE67C' },
                { upper : '#161B21' ,lower : '#F4A950' },
                { upper : '#EB2188' ,lower : '#080A52' },
              ],
            selectedColor : {upper : '#111111', lower : '#FFFFFF'}
        }
    }



    // componentDidMount() {
    //     {
    //         // fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyALj-5l0RJjDt-WTxTQdxVQvPheBQM6kcw')
    //         fetch(fontData)
    //             .then(res => res.json())
    //             .then((data) => {
    //                 console.log(data);

    //                 this.setState({ fonts: data })
    //             })
    //             .catch(console.log)
    //     }

    // this.setState({
    //     fonts : fontData
    // })

    // }

    handleInputChange(event) {

        // if ( event.key === 'Enter') {

        //     let appendEnter = this.state.quote;
        //     appendEnter += '\n';
        //     this.setState({quote : appendEnter})
            
        // } else {

            this.setState({ quote: event.target.value })
        // }
        
    }

    handleFontSize(event) {
        this.setState({ fontSize: event.target.value })
    }

    handleFontFamily(event) {
        this.setState({ fontFamily: event.target.value })
    }

    selectColor(event) {

        this.setState({selectedColor : this.state.colors[event]})
    }

    render() {


        return (
            <div>
                <textarea  onKeyUp={this.handleInputChange.bind(this)}></textarea>

                <select onChange={(e) => this.selectColor(e.target.value)}>
                    {this.state.colors.map((color , index) => {
                                return <option key={index}  value= {index}>
                                            {color.upper} : {color.lower}
                                        </option>
                        })}        
               </select>

                <input
                    id="fontSize"
                    type="range"
                    min="24" max="72"
                    value={this.state.fontSize}
                    onChange={this.handleFontSize.bind(this)}
                    step="2" />

                <select onChange={this.handleFontFamily.bind(this)}>
                    <option value='Times New Roman'>Times New Roman</option>
                    <option value='Arial'>Arial</option>
                    <option value='Helvetica'>Helvetica</option>
                    <option value='Segoe UI'>Segoe UI</option>
                </select>

                <div className="room-container">
                    <div className="room" style={{ fontSize: (this.state.fontSize + 'px'), fontFamily: (this.state.fontFamily), 
                    color: (this.state.selectedColor.upper), backgroundColor: (this.state.selectedColor.lower)  }}>
                            {this.state.quote}
                    </div>
                </div>
            </div>
        );
    }
}

export default ScreenComponent;