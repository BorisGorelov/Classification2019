from gensim.models import translation_matrix
import warnings
warnings.filterwarnings("ignore")

model = translation_matrix.TranslationMatrix.load('translation_model')
def translate(word):
    try:
        return model.translate([str(word)], topn=1)[str(word)][0]
    except:
        return "try another word"

print(translate('why'))