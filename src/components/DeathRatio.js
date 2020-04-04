import React from 'react'

class DeathRatio extends React.Component {
    componentDidMount() {
        this.canvas = document.querySelector(`#${this.props.canvId}`);
        this.ctx = this.canvas.getContext('2d');
        this.width = 155;
        this.height = 155;
        this.fullCircle = 1;
        this.percent = 0;

        //Setting Of Arc
        this.howPercentOnCircle = 270;
        this.howPercentNumber = 74;
        this.widthOfFirstCircle = 10;
        this.widthOffSecondCircle = 5;
        this.radiusCircles = 60;
        this.fontColor = '#000';
        this.fontSize = 30;
        this.fontFamily = 'arial'

        //Gradients Color
        this.barOneGradientOne = '#606'
        this.barOneGradientTwo = '#202'
        this.barTwoGradientOne = '#faf'
        this.barTwoGradientTwo = '#40f'

        console.log(this.props.ratio)
        this.run()
    }

    init() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.ctx.fillStyle = 'transparent';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawArc() {
        this.ctx.beginPath();
        this.ctx.lineWidth = this.widthOfFirstCircle;
        const gradient = this.ctx.createLinearGradient(0, 0, this.width / 2, this.height / 2)
        gradient.addColorStop(0, this.barOneGradientOne);
        gradient.addColorStop(1, this.barOneGradientTwo);
        this.ctx.strokeStyle = gradient;
        this.ctx.arc(this.width / 2, this.height / 2, this.radiusCircles, 0, Math.PI / 180 * 360);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineWidth = this.widthOffSecondCircle;
        this.ctx.lineCap = 'round'
        const gradient2 = this.ctx.createLinearGradient(0, 0, this.width / 2, this.height / 2)
        gradient2.addColorStop(0, this.barTwoGradientOne);
        gradient2.addColorStop(1, this.barTwoGradientTwo);
        this.ctx.strokeStyle = gradient2;
        this.ctx.arc(this.width / 2, this.height / 2, this.radiusCircles, 0, Math.PI / 180 * this.fullCircle);
        this.ctx.stroke();
    }

    countPercent() {
        const floorPercent = Math.floor(this.percent)
        this.ctx.fillStyle = this.fontColor;
        this.ctx.font = ` ${this.fontSize}px ${this.fontFamily}`;
        this.ctx.fillText(`${floorPercent}%`, (this.width / 2), (this.height / 2));
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";


        if (this.percent < this.howPercentNumber) this.percent += 0.3
    }

    clear() {
        this.ctx.fillStyle = 'rgba(245,245,245,1)';
        this.ctx.fillRect(0, 0, this.width, this.height)
    }


    drawCircle() {
        setInterval(() => {
            if (this.fullCircle < this.howPercentOnCircle) {
                this.clear()
                this.fullCircle++
                this.drawArc();
                this.countPercent()
            } else {
                return
            }
        }, 1);
    }

    run() {
        this.init();
        this.drawCircle()
    }

    render() {
        return (
            <canvas id={`${this.props.canvId}`}></canvas>
        )
    }
}
export default DeathRatio