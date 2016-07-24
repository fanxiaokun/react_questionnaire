var React =require('react');
var QuestionItem =require('./QuestionItem.js');
 module.exports = React.createClass({
     render:function () {
         var questions = this.props.questions;
         if(!Array.isArray(questions)) throw new Error('this.props.questions问题必须是数组');
         var questionComps =questions.map(function(qst) {
            return <QuestionItem key={qst.key}
                questionKey ={qst.key}
                tittle={qst.tittle}
                desc={qst.desc}
                voteCount={qst.voteCount}
                onVote ={this.props.onVote}/> 
         }.bind(this))
         return(
             <div id="questions" className="">
                {questionComps}
            </div>
         )
     }
 })