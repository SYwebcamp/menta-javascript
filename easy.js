const name = '田中';
if (confirm(`${name}さんで間違い無いですか？`)){
  console.log(`ようこそ${name}さん`);
}else {
  console.log('正しい名前を入力してください');
}