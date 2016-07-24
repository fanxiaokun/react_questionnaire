var React =require('react');
var ReactDom =require('react-dom');
module.exports =React.createClass({
    handleForm:function (e) {
        e.preventDefault();
        var newQuestion={
            tittle:this.refs.tittle.value,
            desc:this.refs.description.value,
            voteCount:0,
        }
        // this.refs.addQuestionForm.findDOMNode().reset();
        this.refs.addQuestionForm.reset();
        this.props.onNewQuestion(newQuestion);
    },
    render:function () {
        var styleObj ={
            display:this.props.formDisplayed?'block':'none'
        }
        return(
            <form ref="addQuestionForm"style={styleObj}className="addQuestion" className="clearfix" onSubmit={this.handleForm}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="tittle"type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
                </div>
                <textarea ref="description"className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <button className="btn btn-default pull-right"onClick={this.props.onToggleForm}>取消</button>
            </form>
        )
    }
})