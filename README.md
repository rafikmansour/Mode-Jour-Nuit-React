# Composant React qui change entre le mode nuit et le mode jour

Dans cet exemple j'ai utiliser ma propre logique pour créer ce systeme, vous pouvez utiliser une autre façon de faire, l'objectif c'est de vous donner une idée, le code que j'ai donné ici fonctionne et j'utilise meme sur un de mes projet.

Dans cet exemple ous allons utiliser l'état local **(useState)** pour suivre si le mode actuel est le mode jour ou le mode nuit. En fonction de cet état, nous appliquerons différentes classes CSS pour modifier l'apparence de notre composant.


Dans cet exemple, nous utilisons la fonction **useState** pour créer l'état local **isNightMode** qui est initialisé à **false** (mode jour). Le composant est rendu avec une classe CSS dynamique basée sur la valeur de l'état **isNightMode**.

Nous utilisons également la fonction **toggleMode** pour basculer entre le mode jour et le mode nuit. Lorsque le bouton est cliqué, cette fonction est appelée, et elle mettra à jour l'état **isNightMode** en inversant sa valeur actuelle.

Assurez-vous d'avoir défini des styles CSS appropriés pour les classes **night-mode** et day-mode dans un fichier CSS externe (par exemple, App.css). Ces styles définiront les propriétés CSS pour les deux modes (couleurs de fond, couleurs de texte, etc.).
