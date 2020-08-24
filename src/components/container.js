import React from 'react';

class Container extends React.Component {
    render() {
        const content = this.props.content;

        return <div className={'container'}>
            <div className={'row'}>
                {content.map((content, index) =>
                    <div className={generateRowCss(content.rowSize)} key={index}>
                        {content.text}
                    </div>)
                }
            </div>
        </div>
    }
}

const generateRowCss = index =>
    index === 1
        ? convertIntToText(index) + ' column'
        : convertIntToText(index) + ' columns';

const convertIntToText = int => {
    switch(int) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        case 10: return "ten";
        case 11: return "eleven";
        case 12: return "twelve";
        default: return "ERROR";
    }
};

export default Container;