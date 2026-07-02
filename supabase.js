const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function testarConexao() {
    const { data, error } = await supabase
        .from('itens_estoque')
        .select('*');

    if (error) {
        console.error('Erro Supabase:', error);
    } else {
        console.log('Conectado ao Supabase!');
        console.table(data);
    }
}