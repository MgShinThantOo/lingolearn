const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res) => res.render('home'))

app.get('/course', (req,res) => res.render('course'))

app.get('/course_detail', (req,res) => res.render('course_detail'))

app.get('/conversation', (req,res) => res.render('conversation'))

app.get('/conversation_unit', (req,res) => res.render('conversation_unit'))

app.get('/exercise', (req,res) => res.render('exercise'))

app.get('/exercise_unit', (req,res) => res.render('exercise_unit'))

app.get('/renshuu_A', (req,res) => res.render('renshuu_A'))

app.get('/renshuu_A_unit', (req,res) => res.render('renshuu_A_unit'))

app.get('/kanji', (req,res) => res.render('kanji'))

app.get('/kanji_unit', (req,res) => res.render('kanji_unit'))

app.get('/practice', (req,res) => res.render('practice'))

app.get('/practice_title', (req,res) => res.render('practice_title'))

app.get('/practice_matching', (req,res) => res.render('practice_matching'))

app.get('/practice_truefalse', (req,res) => res.render('practice_truefalse'))

app.get('/practice_multiple_text', (req,res) => res.render('practice_multiple_text'))

app.get('/practice_multiple_photo', (req,res) => res.render('practice_multiple_photo'))

app.get('/practice_multiple_audio', (req,res) => res.render('practice_multiple_audio'))

app.get('/practice_rearrange_sentence', (req,res) => res.render('practice_rearrange_sentence'))

app.get('/renshuu_BC', (req,res) => res.render('renshuu_BC'))

app.get('/renshuu_BC_unit', (req,res) => res.render('renshuu_BC_unit'))

app.get('/revision', (req,res) => res.render('revision'))

app.get('/revision_unit', (req,res) => res.render('revision_unit'))

app.get('/sentence_structure', (req,res) => res.render('sentence_structure'))

app.get('/sentence_structure_unit', (req,res) => res.render('sentence_structure_unit'))

app.get('/text_book', (req,res) => res.render('text_book'))

app.get('/text_book_unit', (req,res) => res.render('text_book_unit'))

app.get('/vocabulary', (req,res) => res.render('vocabulary'))

app.get('/vocabulary_unit', (req,res) => res.render('vocabulary_unit'))

app.get('/orders', (req,res) => res.render('orders'))

app.get('/setting', (req,res) => res.render('setting'))

app.get('/users', (req,res) => res.render('users'))

app.get('/reports', (req,res) => res.render('reports'))

app.get('/help', (req,res) => res.render('help'))

app.get('/help_message', (req,res) => res.render('help_message'))

app.get('/assignrole',(req,res) => res.render('assign_role'))

app.get('/login',(req,res) => res.render('login'))


app.listen(3000, () => console.log('server is running at port 3000'))